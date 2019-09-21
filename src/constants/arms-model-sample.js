/* Arms model

  recursive model with nodes like so
  {
    partitionType: '',
    parts: []
  }
  and leaves like so
  {
    field: 'gules'
    fieldVariation: 'paly', // optional
    secondaryFieldTincture: '', // useful if fieldVariation is used
    charge: {} // charges and ordinaries are stuffed in the same property to simplify
  }

*/
const armsParts = {
  'root': {
    id: 'root',
    partitionType: 'perBendSinister',
    parts: ['b','c']
  },
  'b':{
    id: 'b',
    field: 'gules'
  },
  'c': {
    id: 'c',
    field: 'azure'
  }
};
