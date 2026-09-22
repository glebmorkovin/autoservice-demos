import { NextResponse } from "next/server";

export const dynamic = "force-static";

type DgisItem = {
  name?: string;
  address_name?: string;
  reviews?: {
    general_rating?: number | string;
    rating?: number | string;
    general_review_count?: number | string;
    review_count?: number | string;
  };
};

type DgisResponse = {
  result?: {
    items?: DgisItem[];
  };
};

function normalize(value: string | undefined) {
  return value?.toLocaleLowerCase("ru-RU").replace(/ё/g, "е").trim() ?? "";
}

function asNumber(value: number | string | undefined) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export async function GET() {
  const apiKey = process.env.DGIS_PLACES_API_KEY;

  if (!apiKey) {
    return new NextResponse(null, { status: 204 });
  }

  const endpoint = new URL("https://catalog.api.2gis.com/3.0/items");
  endpoint.searchParams.set("q", "Синопсис плюс Гатчина");
  endpoint.searchParams.set("fields", "items.reviews");
  endpoint.searchParams.set("key", apiKey);

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return new NextResponse(null, { status: 204 });
    }

    const payload = (await response.json()) as DgisResponse;
    const item = payload.result?.items?.find(
      (candidate) =>
        normalize(candidate.name) === "синопсис плюс" &&
        normalize(candidate.address_name).includes("дачн"),
    );

    if (!item?.reviews) {
      return new NextResponse(null, { status: 204 });
    }

    const rating = asNumber(
      item.reviews.general_rating ?? item.reviews.rating,
    );
    const count = asNumber(
      item.reviews.general_review_count ?? item.reviews.review_count,
    );

    if (
      rating === null ||
      count === null ||
      rating <= 0 ||
      rating > 5 ||
      count < 0 ||
      !Number.isInteger(count)
    ) {
      return new NextResponse(null, { status: 204 });
    }

    return NextResponse.json(
      { rating, count },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return new NextResponse(null, { status: 204 });
  }
}
