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
    { file: "photos/_MG_0034.JPG", location: "Tokyo, Japan" },
    { file: "photos/_MG_0039.JPG", location: "Tokyo, Japan" },
    { file: "photos/_MG_0082.JPG", location: "Tokyo, Japan" },
    { file: "photos/_MG_0093.JPG", location: "Tokyo, Japan" },
    { file: "photos/_MG_0329.JPG", location: "Tokyo, Japan" },
    { file: "photos/_MG_0602.JPG", location: "Tokyo, Japan" },
    { file: "photos/_MG_0688.JPG", location: "Kyoto, Japan" },
    { file: "photos/_MG_0800.JPG", location: "Kyoto, Japan" },
    { file: "photos/IMG_1016.JPG", location: "Tokyo, Japan" },
    { file: "photos/_MG_0123.JPG", location: "Padua, Italy" },
    { file: "photos/_MG_0436.JPG", location: "Padua, Italy" },
    { file: "photos/_MG_0652.JPG", location: "San Giorgio di Nogaro, Italy" },
    { file: "photos/_MG_1078.JPG", location: "San Giorgio di Nogaro, Italy" },
    { file: "photos/_MG_1168.JPG", location: "San Giorgio di Nogaro, Italy" },
    { file: "photos/_MG_1234.JPG", location: "San Giorgio di Nogaro, Italy" },
    { file: "photos/IMG_7551.JPG", location: "Idroscalo di Milano, Segrate, Italy" },
    { file: "photos/IMG_8038.JPG", location: "Idroscalo di Milano, Segrate, Italy" },
    { file: "photos/IMG_8166.JPG", location: "Idroscalo di Milano, Segrate, Italy" },
    { file: "photos/IMG_8464.JPG", location: "Idroscalo di Milano, Segrate, Italy" },
    { file: "photos/IMG_8487.JPG", location: "Idroscalo di Milano, Segrate, Italy" },
    { file: "photos/IMG_8544.JPG", location: "Mestre, Venice, Italy" },
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
      <header>
        <h1 className="font-black text-center p-20 text-9xl text-transparent bg-gradient-to-t from-ctp-blue-700 to-ctp-yellow-700 bg-clip-text">Photo Portfolio</h1>
      </header>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center lg:w-10/12 mx-auto my-10">
        {scrambledImages.map(({ file, location }) => (
          <Drawer key={file}>
            <DrawerTrigger>
              <img
                src={`${file}`}
                className="rounded-xl transition-all cursor-pointer hover:scale-105"
                height="300"
                style={{ height: "30vh" }}
              />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{location}</DrawerTitle>
                <div className="flex mx-auto">
                  <img
                    className="object-contain rounded-md"
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
