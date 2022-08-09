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
} from "@chakra-ui/react";
import { useState } from "react";
import { ContributedPlace } from "~/lib/fetchPlaces";
import PhotoSlider from "./PhotoSlider";

const numberdayweek = [6, 0, 1, 2, 3, 4, 5];
const today = numberdayweek[new Date().getDay()];

interface Props {
  data: ContributedPlace;
}

export default function Place({ data: place }: Props) {
  const website = place.url || place.googleData?.website;
  const [selectedPhoto, setSelectedPhoto] = useState<number>();

  return (
    <>
      <Box
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
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
            {place.googleData?.opening_hours?.open_now ? (
              <CheckCircleIcon color="green.500" />
            ) : (
              <CloseIcon color="red.500" />
            )}
            {place.googleData?.opening_hours?.open_now ? (
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
          <Stack direction='row' spacing={4}>
            {place.onPremise && <Tag colorScheme='teal'>Sur place</Tag>}
            {place.takeaway && <Tag colorScheme='yellow'>A emporter</Tag>}
            {place.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Stack>
          {place.distance && (
            <Text>
              <ArrowForwardIcon mx="2px" /> {place.distance.toFixed(0)}m (🚶
              {place.timeByFoot})
            </Text>
          )}
          {place.photos && (
            <SimpleGrid columns={[1, 2]} spacing={2}>
              {place.photos.slice(0, 4).map((photo, photoIndex) => (
                <Image
                  src={photo}
                  key={photo}
                  boxSize="200px"
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
