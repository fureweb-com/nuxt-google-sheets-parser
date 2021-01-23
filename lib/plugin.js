import PublicGoogleSheetsParser from 'public-google-sheets-parser'
const gsparser = new PublicGoogleSheetsParser()

export default (_, inject) => {
  inject('gsparser', gsparser) 
}
