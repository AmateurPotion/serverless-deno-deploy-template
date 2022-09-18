import { DiscordApplicationCommandOptionTypes } from "../../../deps.ts";
import { Command } from "template/commands/mod.ts";
import { languages, translate } from "template/languages/mod.ts";
import { updateGuildCommands } from "template/utils/redeploy.ts";

export const language: Command = {
  global: true,
  options: [
    {
      required: true,
      name: "LANGUAGE_KEY_NAME",
      description: "LANGUAGE_KEY_DESCRIPTION",
      type: DiscordApplicationCommandOptionTypes.String,
    },
  ],
  execute: async function (payload) {
    const arg = payload.data?.options?.[0];
    const value = (arg?.value || "") as string;
    if (!value) {
      return { content: translate(payload.guildId!, "LANGUAGE_MISSING_KEY") };
    }

    if (!languages[value]) {
      return {
        content: translate(
          payload.guildId!,
          "LANGUAGE_INVALID_KEY",
          Object.keys(languages),
        ),
      };
    }

    // Set the language to the commands on this server.
    await updateGuildCommands(payload.guildId!);

    return {
      content: translate(payload.guildId!, "LANGUAGE_UPDATED"),
    };
  },
};