import {
  ArrowForwardIcon,
  CheckCircleIcon,
  CloseIcon,
  LinkIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  useMediaQuery,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { ContributedPlace } from "~/lib/fetchPlaces";
import PhotoSlider from "./PhotoSlider";

const numberdayweek = [6, 0, 1, 2, 3, 4, 5];
const today = numberdayweek[new Date().getDay()];

interface Props {
  data: ContributedPlace;
  toggleFilter: (filter: string) => void;
}

export default function Place({ data: place, toggleFilter }: Props) {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");
  const website = place.url || place.googleData?.website;
  const [selectedPhoto, setSelectedPhoto] = useState<number>();
  const isOpen = place.googleData?.opening_hours?.open_now;

  return (
    <>
      <Box
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        opacity={isOpen ? 1 : 0.6}
      >
        <Stack spacing={4}>
          <HStack>
            <Image src={place.googleData?.icon} width={6} />
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"xl"}
              fontFamily={"body"}
              noOfLines={1}
            >
              <Link href={place.googleData?.url}>{place.name}</Link>
            </Heading>
          </HStack>
          <HStack>
            {isOpen ? (
              <CheckCircleIcon color="green.500" />
            ) : (
              <CloseIcon color="red.500" />
            )}
            {isOpen ? (
              <Text color="green.500" fontSize="md">
                Ouvert
              </Text>
            ) : (
              <Text color="red.500" fontSize="md">
                Fermé
              </Text>
            )}
          </HStack>
          {place.isReportedClosed && (
            <HStack>
              <WarningIcon color="yellow.500" />
              <Text color="yellow.500" fontSize="md">
                Signalé comme fermé
              </Text>
            </HStack>
          )}
          <List>
            {place.googleData?.opening_hours?.weekday_text?.map((day, i) => (
              <ListItem
                key={i}
                fontWeight={today === i ? "bold" : undefined}
                color={today === i ? undefined : "gray.500"}
              >
                {day}
              </ListItem>
            ))}
          </List>
          {website && (
            <Link href={website} isExternal color="gray.500" noOfLines={1}>
              <LinkIcon mx="2px" /> {website}
            </Link>
          )}
          <Wrap direction="row" spacing={4}>
            {place.onPremise && (
              <WrapItem>
                <Tag
                  colorScheme="teal"
                  onClick={() => toggleFilter("Sur place")}
                  _hover={{ cursor: "pointer" }}
                >
                  Sur place
                </Tag>
              </WrapItem>
            )}
            {place.takeaway && (
              <WrapItem>
                <Tag
                  colorScheme="yellow"
                  onClick={() => toggleFilter("À emporter")}
                  _hover={{ cursor: "pointer" }}
                >
                  À emporter
                </Tag>
              </WrapItem>
            )}
            {place.tags?.map((tag) => (
              <WrapItem key={tag}>
                <Tag
                  onClick={() => toggleFilter(tag)}
                  _hover={{ cursor: "pointer" }}
                >
                  {tag}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          {place.distance && (
            <Text>
              <ArrowForwardIcon mx="2px" /> {place.distance.toFixed(0)}m (🚶
              {place.timeByFoot})
            </Text>
          )}
          {place.photos && (
            <SimpleGrid columns={[1, 2]} spacing={2}>
              {place.photos
                .slice(0, isDesktop ? 4 : 2)
                .map((photo, photoIndex) => (
                  <Image
                    src={photo}
                    key={photo}
                    boxSize={["100%", "200px"]}
                    objectFit="cover"
                    border="solid 2px lightgray"
                    onClick={() => setSelectedPhoto(photoIndex)}
                  />
                ))}
            </SimpleGrid>
          )}
        </Stack>
      </Box>
      {selectedPhoto !== undefined && place.photos && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedPhoto(undefined)}
          size="6xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <PhotoSlider photos={place.photos} photoIndex={selectedPhoto} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
