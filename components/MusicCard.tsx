import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import {
  MdPauseCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeatOne,
  MdShuffle,
} from "react-icons/md";

export default function MusicCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="max-w-[410px] mt-8 border-1 border-gray-100 dark:border-gray-900 w-full"
      style={{ marginTop: -10 }}
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col items-center justify-stretch gap-2 w-full ">
          <div className="relative col-span-6 md:col-span-4 w-full">
            <Image
              alt="Album cover"
              className="object-cover mx-auto"
              height={200}
              src="https://nextui.org/images/album-cover.png"
              width="auto"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 w-full">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                {liked ? (
                  <IoHeart className="text-red-500" size={24} />
                ) : (
                  <IoHeartOutline size={24} />
                )}
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <MdRepeatOne size={24} className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <MdSkipPrevious size={24} />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <MdPauseCircleFilled size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <MdSkipNext size={24} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <MdShuffle size={24} className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
