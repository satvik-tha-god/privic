//App index
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import ApolloProvider from "./ApolloProvider";

ReactDOM.render(ApolloProvider, document.getElementById("root"));

serviceWorker.register();