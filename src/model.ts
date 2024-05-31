import {t} from "elysia";

export const reqDTO = t.Object({
    Name:t.String(),
    Age:t.Number()
})

export const RespDto = t.Object({
    Tilte : t.String()
})

