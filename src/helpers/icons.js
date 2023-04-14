import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faPlusCircle,
  faTrash,
  faEdit,
  faSpinner,
  faMinusCircle,
  faSignOutAlt,
  faTimesCircle,
  faUser,
  faEnvelope,
  faPhone,
  faMapPin,
  faLock
  
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  library.add(
    fab,
    faArrowRight,
    faPlusCircle,
    faTrash,
    faEdit,
    faSpinner,
    faMinusCircle,
    faSignOutAlt,
    faTimesCircle,
    faUser,
    faEnvelope,
    faPhone,
    faMapPin,
    faLinkedin,
    faTrashAlt,
    faPenToSquare,
    faLock
  );
};

export default Icons;