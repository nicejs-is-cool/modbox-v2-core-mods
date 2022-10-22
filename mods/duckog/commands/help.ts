import type DuckAPI from '../../duckapi/main'
export default function Command_Help(duckapi: DuckAPI) {
    var helpMsg =""+
      "___________             .__  .__ __________                                          \n"+
      "\\__    ___/______  ____ |  | |  |\\______   \\ _______  ___                         \n"+
      "   |    |  \\_  __ \\/  _ \\|  | |  | |    |  _//  _ \\  \\/  /                      \n"+
      "   |    |   |  | \\(  <_> )  |_|  |_|    |   (  <_> >    <                           \n"+
      "   |____|   |__|   \\____/|____/____/______  /\\____/__/\\_ \\ (v3)                  \n"+
      "                                          \\/            \\/                         \n"+
      "––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––--–\n"+
      "| COMMANDS:                                                                         |\n"+
      "| /color htmlColor       eg: /color #C3FF00                                         |\n"+
      //"| /sin text period       eg: /sin # 50                                              |\n"+
      //"| /sin off               disable /sin                                               |\n"+
      "| /lorem numberOfWords   eg: /lorem 10                                              |\n"+
      //"| /b string              eg: /b hello world                                         |\n"+
      //"| /font 2                set teh /b font (from 0 to 10)                             |\n"+
      "| /reverse               upside down mode                                           |\n"+
      //"| /l337                  leet speak mode                                            |\n"+
      //"| /normal                normal mode                                                |\n"+
      //"| /yt on/off             activate youtube embedding                                 |\n"+
      //"| /k&zwnj;ao                   random kaomoji                                             |\n"+
      //"| /emo on/off            activate/desactivate ugly emoticons                        |\n"+
      //"| /say something         make browser say something                                 |\n"+
      //"| /say off               mute speech synthesizer                                    |\n"+
      //"| /pitch 1.5             set speech pitch (from 0.0 to 2.0) (FF)                    |\n"+
      //"| /rate 5.0              set speech rate (from 0.1 to 10.0) (FF)                    |\n"+
      //"| /zalgo [text]          he comes                                                   |\n"+
      //"| /vapor [text]          aesthetics                                                 |\n"+
      //"| /wrap [text]           wrap in flourish                                           |\n"+
      //"| /mess [text]           useless                                                    |\n"+
      //"| /ascii imageUrl        ascii art converter                                        |\n"+
      //"| /who                   list users by [home]                                       |\n"+
      //"| /block [home]          block user (or right click user's name, on the right)      |\n"+
      //"| /unblock [home]        unblock user (or click user's name, on the right)          |\n"+
      //"| /unblock               unblock every user                                         |\n"+
      //"| /scroll                toggle auto scroll                                         |\n"+
      "| /clear                 clear teh chat                                             |\n"+
      "|-----------------------------------------------------------------------------------|\n"
    duckapi.SystemMessage(helpMsg);
}