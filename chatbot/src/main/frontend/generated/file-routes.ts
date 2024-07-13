import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/chat/ChatView.js";
import * as Page2 from "../views/MainLayout.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("chat", [
        createRoute("ChatView", Page0)
    ]),
    createRoute("MainLayout", Page2)
];
export default routes;
