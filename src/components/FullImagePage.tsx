import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { imgId: number }) {
  const image = await getImage(props.imgId);

  return (
    <div className="flex h-full w-full min-w-0 justify-between">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
