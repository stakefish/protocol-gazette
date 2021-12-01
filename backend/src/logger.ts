import { createLogger, format, transports } from 'winston'

export const log = createLogger({
	level: 'debug',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		format.errors({ stack: true }),
		format.colorize({ all: false }),
		format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })
	),
	transports: [
		new transports.Console({ level: "debug" }),
	],
})