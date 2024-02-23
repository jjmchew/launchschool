// defining options types
{
  const p1 = function() {
    // given:
    function calculateRectangleArea(width: number, height?: number) {
      const area = width * (height ?? width);
      return area;
    }
    
    console.log(calculateRectangleArea(3, 0));

    // will output 0
  };
  // p1();



  const p2 = function() {
    interface NameOptions {
      firstName?: string,
      lastName?: string,
      title?: string,
    }

    function formatName(options: NameOptions): string {
      const firstName = options?.firstName || 'John';
      const lastName = options?.lastName || 'Doe';
      const title = options?.title ? options.title + ' ' : '';
      return `${title}${firstName} ${lastName}`;
    }

    // test code provided
    const formattedName = formatName({
      firstName: "Jane",
      lastName: "Smith",
      title: "Dr.",
    });
    
    console.log(formattedName); // "Dr. Jane Smith"
    console.log(formatName({})); // John Doe
  };
  // p2();




  const p3 = function() {
    interface NameOptions {
      firstName?: string,
      lastName?: string,
      title?: string,
    }

    function formatName({ firstName = 'John', lastName = 'Doe', title = '' } : NameOptions): string {
      return `${title ? title + ' ' : title}${firstName} ${lastName}`;
    }

    // test code provided
    const formattedName = formatName({
      firstName: "Jane",
      lastName: "Smith",
      title: "Dr.",
    });
    
    console.log(formattedName); // "Dr. Jane Smith"
    console.log(formatName({})); // John Doe
  }
  p3();

}