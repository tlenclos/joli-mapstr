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

export default function Place({ data }: Props) {
  const website = data.url || data.googleData?.website;
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
            <Image src={data.googleData?.icon} width={6} />
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"xl"}
              fontFamily={"body"}
              noOfLines={1}
            >
              <Link href={data.googleData?.url}>{data.name}</Link>
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
          {data.isReportedClosed && (
            <HStack>
              <WarningIcon color="yellow.500" />
              <Text color="yellow.500" fontSize="md">
                Signalé comme fermé
              </Text>
            </HStack>
          )}
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
