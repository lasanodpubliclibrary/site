import { authRouter } from "./routers/auth";
import { eventRauter } from "./routers/event";
import { router } from "./trpc";

export const appRouter = router({
  auth: authRouter,
  event: eventRauter,
});

export type AppRouter = typeof appRouter;
