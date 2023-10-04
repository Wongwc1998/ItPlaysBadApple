import YouTubePlayer from "@/components/YouTubePlayer";

export const metadata = {
  title: 'What is "Bad Apple!!" ?',
};

export default async function About() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            What is &quot;Bad Apple!!&quot; ?
          </h1>
          <p className="text-xl text-muted-foreground">
            Anything that can display something will eventually have a bad apple
            port on it.
          </p>
          <p className="text-xl text-muted-foreground">
            --Some Youtube comment
          </p>
          <h2>
            &quot;Bad Apple!!&quot; (Full name &quot;Bad Apple!!&quot; ft.
            nomico) is a fan-made, black-and-white music video of a fan-made
            cover of a track in the Touhou Project series of video games. Due to 
           the ardent fanbase of the Touhou Project, and the simplicity of the
            music video, the music video has been ported to countless platforms
            and devices.
          </h2>
          <YouTubePlayer videoId="FtutLA63Cp8" />
          <p>
            Originally, &quot;Bad Apple!!&quot; is the 7th track in the
            soundtrack of the video game Lotus Land Story, the 4th entry of
            Touhou Project, a series of bullet hell video game developed by ZUN,
            with a devoted following.
          </p>
          <YouTubePlayer videoId="5Su8UOs0SFA" />
          <p>
            The track was covered by Masayoshi Minoshima, the leader of the
            music group Alstroemeria Records, featuring the voice of singer
            nomico.
          </p>
          <YouTubePlayer videoId="2GIMgD_gShU" />
          <p>
            Later, a fan by the name of Mμ on the Japanese video website, Nico
            Nico Douga, outlined a story board for a music video for this track.
          </p>
          <YouTubePlayer videoId="1KpwLbffcxE" />
          <p>
            The music video for this track was created by the animator
            Anira(あにら). The music video featured the black-and-white
            silhouettes of the 3d models of the characters from the Touhou
            Project.
          </p>
          <p>
            This video was then ported to various platforms by Touhou Project
            fans, including obscure hardware, such as old computers,
            oscilloscopes, anything with a display, or software, such as
            Minecraft, Task Manager, or anything with a display(again).
          </p>
          <YouTubePlayer videoId="5G7bGF7qkPw" />
          <p>
            The music video is easily replicable, given that it is in
            black-and-white, and the silhouette of the character in the music
            video is very recognizable. In many ways Bad Apple!! is similar to
            the video game Doom, in that it is an elementary, yet charming and
            recognizable piece of art, that serves as a &quot;Hello World!&quot; for
            graphic display capabilities. This website thus serves as a catalog
            for all things that can play the &quot;Bad Apple!!&quot; video.
          </p>
          <p>
            Unfortunately this website does not play the &quot;Bad Apple!!&quot; video,
            YET. I need to figure out how to implement the Bad Apple CSS art
            across the website.
          </p>
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
}
