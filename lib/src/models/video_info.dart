// ignore_for_file: public_member_api_docs, sort_constructors_first
/// Holds information about an Internet video.
class VideoInfo {
  /// The title of the video.
  String title;

  /// The URL of the video's cover image.
  String coverImageUrl;

  /// The location from which to stream the video.
  String videoImageUrl;
  VideoInfo({
    required this.title,
    required this.coverImageUrl,
    required this.videoImageUrl,
  });


}
