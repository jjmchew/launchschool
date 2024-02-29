// https://launchschool.com/lessons/f1e59145/assignments/d469ecca

{
  // given
  type NameOptions = {
    firstName?: string;
    lastName?: string;
    title?: string;
  };

  // function formatName(options: NameOptions): string {
    // Your implementation here
  // }

  // const formattedName = formatName({
  //   firstName: "Jane",
  //   lastName: "Smith",
  //   title: "Dr.",
  // });

  // test code
  // console.log(formattedName); // "Dr. Jane Smith"
  // console.log(formatName({})); // John Doe

  // don't use `??` to handle optional properties
}



{
  type NameOptions = {
    firstName?: string;
    lastName?: string;
    title?: string;
  };

  // non-mutating:

  // function formatName({
  //   firstName = 'John',
  //   lastName = 'Doe',
  //   title = '',
  // }: NameOptions): string {
  //   if (title) title += ' ';
  //   return `${title}${firstName} ${lastName}`;
  // }

  // mutating
  function formatName(obj: NameOptions = {}): string {
    let copy = { ... obj };
    copy.title = copy.title ?? '';
    copy.firstName = copy.firstName ?? 'John';
    copy.lastName = copy.lastName ?? 'Doe';

    if (copy.title) copy.title += ' ';
    return `${copy.title}${copy.firstName} ${copy.lastName}`;
  }

  const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
  });

  // test code
  console.log(formattedName); // "Dr. Jane Smith"
  console.log(formatName({})); // John Doe

  let person: NameOptions = {
    firstName: 'joe',
    lastName: 'guy',
    title: 'dr',
  };
  console.log(formatName(person));
  console.log(person);
}