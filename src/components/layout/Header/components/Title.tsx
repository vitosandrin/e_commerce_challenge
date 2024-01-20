import { Text } from "@src/components";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <Link to="/">
      <Text size="md" weight={600}>
        Fake Store
      </Text>
    </Link>
  );
};
