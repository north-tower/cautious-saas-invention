import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"


function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
          <Image priority src="https://raw.githubusercontent.com/north-tower/legendary-saas/4ea09924099fcd2dd3a99cf1667c58273b84673a/images/logos/black.svg" alt="logo" layouts="fill"
         width={150}
         height={30}
         style={{objectFit:"cover",
        objectPosition:"left"}} className="dark:filter dark:invert" />
        </AspectRatio>
      </div>
    </Link>
  );
} 

export default Logo