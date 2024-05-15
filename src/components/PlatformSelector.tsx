import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  // API call to get the platforms
  const { data, error } = usePlatforms();
  // get the currently selected platform id
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  //  get details of selected platform
  const selectedPlatform = usePlatform(selectedPlatformId);

  // function to update platformId
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
