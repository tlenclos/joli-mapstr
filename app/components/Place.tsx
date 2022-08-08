import {
  ArrowForwardIcon,
  CheckCircleIcon,
  CloseIcon,
  LinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
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

export default function Place({ data }: Props) {
  const website = data.url || data.googleData?.website;
  const [selectedPhoto, setSelectedPhoto] = useState<number>();

  return (
    <>
      <Center>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack spacing={4}>
            <LinkBox as={Stack}>
              <HStack>
                <Image src={data.googleData?.icon} width={6} />
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"xl"}
                  fontFamily={"body"}
                  noOfLines={1}
                >
                  <LinkOverlay href={data.googleData?.url}>
                    {data.name}
                  </LinkOverlay>
                </Heading>
              </HStack>
              <HStack>
                {data.googleData?.opening_hours?.open_now ? (
                  <CheckCircleIcon color="green.500" />
                ) : (
                  <CloseIcon color="red.500" />
                )}
                {data.googleData?.opening_hours?.open_now ? (
                  <Text color="green.500" fontSize="md">
                    Ouvert
                  </Text>
                ) : (
                  <Text color="red.500" fontSize="md">
                    Fermé
                  </Text>
                )}
              </HStack>
              <List>
                {data.googleData?.opening_hours?.weekday_text?.map((day, i) => (
                  <ListItem
                    key={i}
                    fontWeight={today === i ? "bold" : undefined}
                    color={today === i ? undefined : "gray.500"}
                  >
                    {day}
                  </ListItem>
                ))}
              </List>
            </LinkBox>
            {website && (
              <Link href={website} isExternal color="gray.500" noOfLines={1}>
                <LinkIcon mx="2px" /> {website}
              </Link>
            )}
            {data.tags && (
              <HStack spacing={4}>
                {data.tags?.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </HStack>
            )}
            {data.distance && (
              <Text>
                <ArrowForwardIcon mx="2px" /> {data.distance.toFixed(0)}m (🚶
                {data.timeByFoot})
              </Text>
            )}
            {data.photos && (
              <SimpleGrid columns={[1, 2]} spacing={2}>
                {data.photos.slice(0, 4).map((photo, photoIndex) => (
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
      </Center>
      {selectedPhoto !== undefined && data.photos && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedPhoto(undefined)}
          size="6xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <PhotoSlider photos={data.photos} photoIndex={selectedPhoto} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
