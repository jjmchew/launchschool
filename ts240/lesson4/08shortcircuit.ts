// short circuiting
{
  // given:
  // type Vehicle =
  // | {
  //     kind: "car";
  //     fuelType: "gas" | "electric";
  //     range: number;
  //   }
  // | {
  //     type: "bicycle";
  //     isElectric: boolean;
  //   };

  // function getVehicleInfo(vehicle: Vehicle) {
  //   const info =
  //     (vehicle.kind === "car" &&
  //       `Car with ${vehicle.fuelType} engine and a range of ${vehicle.range} km`) ||
  //     (vehicle.type === "bicycle" &&
  //       `Bicycle with electric assist: ${vehicle.isElectric}`);
  //   console.log(info);
  // }

  // getVehicleInfo({ type: "bicycle", isElectric: true });

  // **WRONG** : Vehicle type definition looks to have an error : extra `|`
  //    - this extra `|` looks to be a common convention when indicating union types on separate lines

  // when 2 types have nothing in common, TS cannot perform any type narrowing - this leads to an error

}