
import { UserProvider } from "./UserContext";

const Providers = ({ children }:any) => {
  return <UserProvider>{children}</UserProvider>;
};
export default Providers;
