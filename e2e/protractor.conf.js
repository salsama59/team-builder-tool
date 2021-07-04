// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require("jasmine-spec-reporter");
var path = require("path");
var downloadsPath = path.resolve(__dirname, "./e2e_tests/download");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
	allScriptsTimeout: 11000,
	specs: ["./src/**/*.e2e-spec.ts"],
	capabilities: {
		browserName: "chrome",
		chromeOptions: {
			w3c: false,
			// Set download path and avoid prompting for download even though
			// this is already the default on Chrome but for completeness
			prefs: {
				download: {
					prompt_for_download: false,
					directory_upgrade: true,
					default_directory: downloadsPath
				}
			}
		}
	},
	directConnect: true,
	SELENIUM_PROMISE_MANAGER: false,
	baseUrl: "http://localhost:4200/",
	framework: "jasmine",
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		print: function () {}
	},
	onPrepare() {
		require("ts-node").register({
			project: require("path").join(__dirname, "./tsconfig.json")
		});
		jasmine.getEnv().addReporter(
			new SpecReporter({
				spec: {
					displayStacktrace: StacktraceOption.PRETTY
				}
			})
		);
	}
};
