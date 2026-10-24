// One 20s clock owns geometry, headline and current service on mobile.
export const SERVICES = ["web", "mobile", "ai", "custom"] as const;
export const DURATION = 20;
export type Box = readonly [number, number, number, number];
type Pose = { frame: Box; cards: readonly Box[]; data: Box; logic: Box; depth: number; angle: number; sidebar: number; phone: number };
export const POSES: readonly Pose[] = [
  { frame: [6, 24, 338, 244], cards: [[75,108,111,58],[199,108,111,58],[75,180,235,65]], data:[14,34,292,194], logic:[32,50,304,202], depth:0, angle:-1.2, sidebar:1, phone:0 },
  { frame: [102,8,146,300], cards:[[118,82,114,50],[118,143,114,50],[118,204,114,78]], data:[106,25,138,280], logic:[108,30,138,280], depth:0, angle:0, sidebar:0, phone:1 },
  { frame: [28,112,290,194], cards:[[80,174,102,44],[194,174,102,44],[80,230,216,54]], data:[14,4,252,166], logic:[70,55,266,190], depth:1, angle:-2.2, sidebar:1, phone:0 },
  { frame: [8,82,334,216], cards:[[74,152,112,52],[198,152,112,52],[74,218,236,60]], data:[14,22,292,194], logic:[32,51,304,202], depth:.85, angle:-1, sidebar:1, phone:0 },
];
export const smooth = (n: number) => { const t=Math.max(0,Math.min(1,n)); return t*t*(3-2*t); };
export const mix = (a:number,b:number,t:number) => a+(b-a)*t;
export function frameAt(seconds:number) {
  const time=((seconds%DURATION)+DURATION)%DURATION;
  const index=Math.floor(time/5), local=time%5;
  const progress=smooth((local-3.4)/1.6), next=(index+1)%4;
  const active=local<4.2?index:next;
  const opacity=local<4.2?1-smooth((local-3.4)/.8):smooth((local-4.2)/.8);
  const a=POSES[index],b=POSES[next];
  const box=(x:Box,y:Box)=>x.map((v,i)=>mix(v,y[i],progress)) as unknown as Box;
  return { active, opacity, titleY:(local<4.2?-1:1)*(1-opacity)*7,
    frame:box(a.frame,b.frame),cards:a.cards.map((v,i)=>box(v,b.cards[i])),
    data:box(a.data,b.data),logic:box(a.logic,b.logic),
    depth:mix(a.depth,b.depth,progress),angle:mix(a.angle,b.angle,progress),
    sidebar:mix(a.sidebar,b.sidebar,progress),phone:mix(a.phone,b.phone,progress) };
}
export const headlines = {
  tr:["Dijitalde güçlü bir\ndeneyim.","Her yerde çalışan\nçözümler.","Veriden akıllı\nkararlara.","İşinize göre\nyazılım."],
  en:["A stronger digital\nexperience.","Solutions that work\nanywhere.","Turn data into\nsmart decisions.","Software for\nyour business."],
  de:["Starke digitale\nErlebnisse.","Überall nutzbare\nLösungen.","Daten für kluge\nEntscheidungen.","Software für\nIhr Unternehmen."],
};
