// Import the xml2js library
const { parseString } = require('xml2js');

// Sample XML response from the server containing custom tags
const xmlResponse = `
  <root>
    <customTag1>This is the content of customTag1.</customTag1>
    <customTag2>This is the content of customTag2.</customTag2>
    <nestedElement>
      <nestedTag1>This is nestedTag1 inside nestedElement.</nestedTag1>
      <nestedTag2>This is nestedTag2 inside nestedElement.</nestedTag2>
    </nestedElement>
  </root>
`;

// Function to parse the XML response
function parseXmlResponse(xmlData) {
  // Parse the XML string into a JavaScript object
  parseString(xmlData, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
    } else {
      // Access the parsed object here
      console.log('Parsed XML Object:', result);

      // Access custom tags and nested elements
      const customTag1Content = result.root.customTag1[0];
      const customTag2Content = result.root.customTag2[0];
      console.log('Custom Tag 1 Content:', customTag1Content);
      console.log('Custom Tag 2 Content:', customTag2Content);

      const nestedTag1Content = result.root.nestedElement[0].nestedTag1[0];
      const nestedTag2Content = result.root.nestedElement[0].nestedTag2[0];
      console.log('Nested Tag 1 Content:', nestedTag1Content);
      console.log('Nested Tag 2 Content:', nestedTag2Content);
    }
  });
}

// Call the function with the XML response
parseXmlResponse(xmlResponse);
