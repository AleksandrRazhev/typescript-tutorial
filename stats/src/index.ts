import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// const csvFileReader = new CsvFileReader("football.csv");

// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
// summary.builAdnPrinReport(matchReader.matches);

const summary1 = Summary.winsAnalysisWithHtmlReport("Man United");
summary1.builAdnPrinReport(matchReader.matches);
