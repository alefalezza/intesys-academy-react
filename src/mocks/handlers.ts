import { rest } from "msw";
import { IMaterialList } from "../components/home/materials/types";
import { appointments } from "./fixtures/appointments";
import { materials } from "./fixtures/materials";

export const handlers = [
  rest.get("/appointmentsByDate", (req, res, ctx) =>
    res(ctx.json(appointments))
  ),

  rest.get("/materials", (req, res, ctx) => res(ctx.json(materials))),
];
