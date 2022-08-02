"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
// summary.builAdnPrinReport(matchReader.matches);
const summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary1.builAdnPrinReport(matchReader.matches);
