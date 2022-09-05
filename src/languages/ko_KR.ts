import { Language } from "./mod.ts";

const korean: Language = {
  // COMMON STRINGS

  MISSING_MEMBER: "유저가 존재하지 않는 것 같아요.",
  MISSING_PERM_LEVEL: "이 명령을 수행하기에 권한이 부족해요.",
  
  // COMMANDS STRINGS

  // Avatar Command
  AVATAR_NAME: "아바타",
  AVATAR_DESCRIPTION: "다른 사용자 혹은 자신의 아바타를 출력해요.",
  AVATAR_USER_NAME: "사용자",
  AVATAR_USER_DESCRIPTION: "@user 의 아바타를 출력해요.",

  // Language Command
  LANGUAGE_NAME: "언어",
  LANGUAGE_DESCRIPTION: "봇의 언어를 변경할 수 있어요.",
  LANGUAGE_KEY_NAME: "명칭",
  LANGUAGE_KEY_DESCRIPTION: "어떤 언어로 변경할까요?",
  LANGUAGE_MISSING_KEY: "지원되는 언어가 없어요.",
  LANGUAGE_INVALID_KEY: (languages: string[]) =>
    `이런! 해당 언어는 없는 것 같아요. 제가 알고있는 언어를 선택해주세요 : ${
      languages.join(" ")
    }`,
  LANGUAGE_UPDATED: (language: string) =>
    `언어가 ${language}로 변경됬어요.`,

  // Ping Command
  PING_NAME: "ping",
  PING_DESCRIPTION: "봇이 켜져있는지 확인할 수 있어요.",
  PING_RESPONSE: "pong! Discordeno Best Lib!",
};

export default korean;
