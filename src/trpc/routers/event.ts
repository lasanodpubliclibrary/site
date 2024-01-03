import { z } from "zod";
import { getPayloadClient } from "../../get-payload";
import { publicProcedure, router } from "../trpc";

export const eventRauter = router({
  getTopEvent: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(100) }))
    .query(async ({ input }) => {
      const { limit } = input;

      const payload = await getPayloadClient();

      try {
        const { docs: events } = await payload.find({
          collection: "events",
          sort: "-date",
          limit,
          depth: 2,
        });
        return {
          events,
        };
      } catch (error: unknown) {}
    }),
});
