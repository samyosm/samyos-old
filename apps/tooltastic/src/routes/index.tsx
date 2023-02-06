import type { RequestHandler } from "@builder.io/qwik-city";
import cityPlan from '@qwik-city-plan';

export const onGet: RequestHandler = async ({ response }) => {
  throw response.redirect(cityPlan.routes[1][3]);
};
