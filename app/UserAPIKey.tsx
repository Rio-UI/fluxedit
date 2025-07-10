"use client";

import { useEffect, useState } from "react";

export function UserAPIKey() {
  const [userAPIKey, setUserAPIKey] = useState(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      return localStorage.getItem("togetherApiKey") || "";
    }
    return "";
  });

  useEffect(() => {
    if (userAPIKey) {
      localStorage.setItem("togetherApiKey", userAPIKey);
    } else {
      localStorage.removeItem("togetherApiKey");
    }
  }, [userAPIKey]);

  return (
    <div className="flex gap-3 items-center">
      <a
        href="https://api.riiio.chat/console/token"
        target="_blank"
        className="text-left text-xs leading-8" // leading-8 = 32px
        style={{ lineHeight: '32px' }}
      >
        获取 API
      </a>
      <input
        type="password"
        value={userAPIKey}
        autoComplete="off"
        onChange={(e) => setUserAPIKey(e.target.value)}
        placeholder="请输入API密钥"
        className="h-8 rounded border-[0.5px] border-gray-700 bg-gray-900 px-2 text-sm focus-visible:outline focus-visible:outline-gray-200"
      />
    </div>
  );
}
