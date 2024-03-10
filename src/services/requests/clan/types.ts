export interface Clan {
  items: Member[];
  paging: Paging;
}

export interface Member {
  tag: string;
  name: string;
  role: string;
  townHallLevel: number;
  expLevel: number;
  league: League;
  trophies: number;
  builderBaseTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  playerHouse?: PlayerHouse;
  builderBaseLeague: BuilderBaseLeague;
}

export interface League {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export interface IconUrls {
  small: string;
  tiny: string;
  medium?: string;
}

export interface PlayerHouse {
  elements: Element[];
}

export interface Element {
  type: string;
  id: number;
}

export interface BuilderBaseLeague {
  id: number;
  name: string;
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {}
