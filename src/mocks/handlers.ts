import { rest } from "msw";

export const handlers = [
  rest.get("/appointmentsByDate", (req, res, ctx) => {
    return res(
      ctx.json({
        "2021-11-14": { id: 1, hour: "10:00", title: "string", done: false },
      })
    );
  }),
];
