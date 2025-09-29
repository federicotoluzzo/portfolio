import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function Home() {
  const images = [
    { file: "_MG_0034.JPG", location: "Tokyo, Japan" },
    { file: "_MG_0039.JPG", location: "Tokyo, Japan" },
    { file: "_MG_0082.JPG", location: "Tokyo, Japan" },
    { file: "_MG_0093.JPG", location: "Tokyo, Japan" },
    { file: "_MG_0329.JPG", location: "Tokyo, Japan" },
    { file: "_MG_0602.JPG", location: "Tokyo, Japan" },
    { file: "_MG_0688.JPG", location: "Kyoto, Japan" },
    { file: "_MG_0800.JPG", location: "Kyoto, Japan" },
    { file: "IMG_1016.JPG", location: "Tokyo, Japan" },
    { file: "_MG_0123.JPG", location: "Padua, Italy" },
    { file: "_MG_0436.JPG", location: "Padua, Italy" },
  ];

  // Fisher-Yates shuffle
  function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const scrambledImages = shuffle(images);

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center lg:w-10/12 mx-auto my-10">
        {scrambledImages.map(({ file, location }) => (
          <Drawer key={file}>
            <DrawerTrigger>
              <img
                src={`${file}`}
                className="rounded-xl transition-all cursor-pointer shadow-md shadow-foreground hover:scale-105 hover:shadow-lg"
                height="300"
                style={{ height: "30vh" }}
              />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{location}</DrawerTitle>
                <div className="flex mx-auto">
                  <img
                    className="object-contain rounded-md shadow-xl shadow-foreground"
                    style={{ height: "70vh" }}
                    src={`${file}`}
                  />
                </div>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </div>
  );
}
