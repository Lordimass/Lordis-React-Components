"use client";

import { createContext } from "react";

/**
 * Settings for components which are provided from some external source. For example, this could be used to configure
 * the site based on values from a database table, which is fetched when the site loads. Certain keys are reserved for
 * settings which are used by components, which you can be set freely, so long as they follow the given structure.
 */
export const LRCRemoteSettingsContext = createContext<LRCRemoteSettings>({});
export interface LRCRemoteSettings {
  /** Disable ordering products all together. This is for use in an emergency. */
  kill_switch?: { enabled: boolean; message?: string };
  /** A notification to display to users at the start of their session. */
  session_notif?: SessionNotif;
  [key: string]: any;
}

export interface SessionNotif {
  enabled: boolean;
  message: string;
  startTime: string;
  endTime: string;
  duration: number;
}
