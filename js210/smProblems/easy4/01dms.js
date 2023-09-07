function dms(angle) {
  angle = angle < 0 ? -Math.abs(angle) % 360 : Math.abs(angle) % 360;
  if (angle < 0) angle += 360;
  console.log(angle);

  const DEGREE_SYM = String.fromCharCode(176);
  const DEG_TO_MIN = 60;
  const MIN_TO_SEC = 60;

  const degrees = Math.floor(angle);
  const minutes = Math.floor((angle - degrees) * DEG_TO_MIN);
  const seconds = Math.floor((angle - degrees - (minutes / DEG_TO_MIN)) * DEG_TO_MIN * MIN_TO_SEC);

  let output =`${String(degrees)}${DEGREE_SYM}${String(minutes).padStart(2,'0')}'${String(seconds).padStart(2,'0')}"`;
  console.log(output);
  return output;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"
