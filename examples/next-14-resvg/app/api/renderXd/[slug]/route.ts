import {NextResponse} from 'next/server';
import {rendersvg} from "@/lib/productconf/rendersvg/rendersvg";

export async function GET(
  request: Request,
  {params}: { params: { slug: string } }
): Promise<NextResponse> {
  const buffer = await rendersvg(params.slug)
  const res = new NextResponse(buffer, {
    status: 200,
    headers: new Headers({"content-type": "image/png"}),
  });
  return res;
}

