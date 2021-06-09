import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'
import HeaderItem from "./HeaderItem";



const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex  justify-evenly max-w-2xl">
      <HeaderItem title='HOME' Icon={HomeIcon} />
      <HeaderItem title='Subscribe' Icon={BadgeCheckIcon} />
      <HeaderItem title='Boost' Icon={LightningBoltIcon} />
      <HeaderItem title='Collection' Icon={CollectionIcon} />
      <HeaderItem title='User' Icon={UserIcon} />
      <HeaderItem title='Search' Icon={SearchIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        height={100}
        width={200}
      />
    </div>
  );
};

export default Header;
