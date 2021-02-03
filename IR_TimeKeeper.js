//=============================================================================
// IR_TimeKeeper.js
//=============================================================================
var IR = IR || {};
IR.TimeKeeper = IR.TimeKeeper || {};
IR.TimeKeeper.version = 1.0;
/*:
 * @plugindesc Track seconds, hours, miniutes, days, months and years
 *
 * @author Shawn Recinto - Immersive Realms, Inc.
 *
 * @param ---General---
 * @default
 *
 * @param Seconds In a Minute
 * @parent ---General---
 * @type number
 * @min 1
 * @desc The number of in game seconds in an in game minute
 * @default 60
 *
 * @param Minutes In a Hour
 * @parent ---General---
 * @type number
 * @min 1
 * @desc The number of in game minutes in an in game hour
 * @default 60
 *
 * @param Hours In a Day
 * @parent ---General---
 * @type number
 * @min 1
 * @desc The number of in game hours in an in game day
 * @default 24
 *
 * @param Days In a Month
 * @parent ---General---
 * @type number
 * @min 1
 * @desc The number of in game days in an in game month
 * @default 30
 *
 * @param Months in a Year
 * @parent ---General---
 * @type number
 * @min 1
 * @desc The number of in game days in an in game month
 * @default 30
 *
 * @param ---Starting Values---
 * @default
 *
 * @param Second
 * @parent ---Starting Values---
 * @type number
 * @min 0
 * @desc The second to start the timer with.  Seconds range from 0 to Seconds In a Minute
 * @default 0
 *
 * @param Minute
 * @parent ---Starting Values---
 * @type number
 * @min 0
 * @desc The minute to start the timer with.  Minutes range from 0 to Minutes In a Hour
 * @default 0
 *
 * @param Hour
 * @parent ---Starting Values---
 * @type number
 * @min 0
 * @desc The hours to start the timer with.  Hours range from 0 to Hours In a Day
 * @default 0
 *
 * @param Day
 * @parent ---Starting Values---
 * @type number
 * @min 1
 * @desc The day to start the timer with.  Days range from 1 to Days In a Month
 * @default 1
 * @help
 *
 * @param Month
 * @parent ---Starting Values---
 * @type number
 * @min 1
 * @desc The month to start the timer with.  Months range from 1 to Months in a Year
 * @default 1
 *
 * @param Year
 * @parent ---Starting Values---
 * @type number
 * @min 1
 * @desc The Year to start the timer with.
 * @default 1
 *
 * @help
 * Anything users might need to know about using your plugin.
 *
 * TERMS OF USE
 * What people who use your plugin are allowed to do with it.
 *
 * COMPATIBILITY
 * Any compatibility issues you know of or that have been brought to your attention, such as not being able to use this plugin with one of Galv's for example. This will be most common when you have a plugin that does the same or a similar thing to someone else's.
 */

//=============================================================================
// Parameter Variables
//=============================================================================

IR.TimeKeeper.Parameters = PluginManager.parameters('IR_TimeKeeper');
IR.TimeKeeper.Config = IR.TimeKeeper.Config || {};


IR.TimeKeeper.Config.SecsInMin = Number(IR.TimeKeeper.Parameters['Seconds In a Minute']);
IR.TimeKeeper.Config.MinsInHour = Number(IR.TimeKeeper.Parameters['Minutes In a Hour']);
IR.TimeKeeper.Config.HoursInDay = Number(IR.TimeKeeper.Parameters['Hours In a Day']);
IR.TimeKeeper.Config.DaysInMonth = Number(IR.TimeKeeper.Parameters['Days In a Month']);
IR.TimeKeeper.Config.MonthsInYear = Number(IR.TimeKeeper.Parameters['Months in a Year']);

IR.TimeKeeper.Config.StartingSec = Number(IR.TimeKeeper.Parameters['Second']);
IR.TimeKeeper.Config.StartingMin = Number(IR.TimeKeeper.Parameters['Minute']);
IR.TimeKeeper.Config.StartingHour = Number(IR.TimeKeeper.Parameters['Hour']);
IR.TimeKeeper.Config.StartingDay = Number(IR.TimeKeeper.Parameters['Day']);
IR.TimeKeeper.Config.StartingMonth = Number(IR.TimeKeeper.Parameters['Month']);
IR.TimeKeeper.Config.StartingYear = Number(IR.TimeKeeper.Parameters['Year']);

(function() {

})();