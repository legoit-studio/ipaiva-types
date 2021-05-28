import * as ipaiva from 'ipaiva';

ipaiva.library.onDidPick(({ url }) => {
    ipaiva.window.showInformationMessage(url);
});

// $ExpectType string
ipaiva.version;

ipaiva.schemas.register([
    {
      fields: [
        {
          label: '填充色',
          name: 'fill',
          type: 'color'
        }
      ]
    }
  ]
)
