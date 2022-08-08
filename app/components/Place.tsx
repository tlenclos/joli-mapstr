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
  List,
  ListItem,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContributedPlace } from "~/routes";

const numberdayweek = [6, 0, 1, 2, 3, 4, 5];
const today = numberdayweek[new Date().getDay()];

interface Props {
  data: ContributedPlace;
}

export default function Place({ data }: Props) {
  const website = data.url || data.googleData?.website;

  return (
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
        {/* <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Box> */}
        <Stack spacing={4}>
          <HStack>
            <Image src={data.googleData?.icon} width={6} />
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"xl"}
              fontFamily={"body"}
              noOfLines={1}
            >
              {data.name}
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
          {website && (
            <Link href={website} isExternal color="gray.500" noOfLines={1}>
              <LinkIcon mx="2px" /> {website}
            </Link>
          )}
          {data.tags && (
            <HStack spacing={4}>
              {data.tags?.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </HStack>
          )}
          {data.distance && (
            <Text>
              <ArrowForwardIcon mx="2px" /> {data.distance.toFixed(0)}m (🚶
              {data.timeByFoot})
            </Text>
          )}
        </Stack>
      </Box>
    </Center>
  );
}
