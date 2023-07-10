#!/bin/sh
set -e
set -u
set -o pipefail

function on_error {
  echo "$(realpath -mq "${0}"):$1: error: Unexpected failure"
}
trap 'on_error $LINENO' ERR


# This protects against multiple targets copying the same framework dependency at the same time. The solution
# was originally proposed here: https://lists.samba.org/archive/rsync/2008-February/020158.html
RSYNC_PROTECT_TMP_FILES=(--filter "P .*.??????")


variant_for_slice()
{
  case "$1" in
  "AgentifaiAssistant.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiAssistant.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreAnalytics.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreAnalytics.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreCommon.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreCommon.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreDomain.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreDomain.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreNetworking.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreNetworking.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreNotifications.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreNotifications.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreRealtime.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreRealtime.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreUI.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreUI.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiCoreUserAuth.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiCoreUserAuth.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiFeatureFeedback.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiFeatureFeedback.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiFeatureNotifications.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiFeatureNotifications.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiFeatureSelector.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiFeatureSelector.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiFeatureWebView.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiFeatureWebView.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiRxSwiftCombine.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiRxSwiftCombine.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  "AgentifaiSharedResources.xcframework/ios-arm64")
    echo ""
    ;;
  "AgentifaiSharedResources.xcframework/ios-arm64_x86_64-simulator")
    echo "simulator"
    ;;
  esac
}

archs_for_slice()
{
  case "$1" in
  "AgentifaiAssistant.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiAssistant.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreAnalytics.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreAnalytics.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreCommon.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreCommon.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreDomain.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreDomain.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreNetworking.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreNetworking.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreNotifications.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreNotifications.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreRealtime.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreRealtime.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreUI.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreUI.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiCoreUserAuth.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiCoreUserAuth.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiFeatureFeedback.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiFeatureFeedback.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiFeatureNotifications.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiFeatureNotifications.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiFeatureSelector.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiFeatureSelector.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiFeatureWebView.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiFeatureWebView.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiRxSwiftCombine.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiRxSwiftCombine.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  "AgentifaiSharedResources.xcframework/ios-arm64")
    echo "arm64"
    ;;
  "AgentifaiSharedResources.xcframework/ios-arm64_x86_64-simulator")
    echo "arm64 x86_64"
    ;;
  esac
}

copy_dir()
{
  local source="$1"
  local destination="$2"

  # Use filter instead of exclude so missing patterns don't throw errors.
  echo "rsync --delete -av "${RSYNC_PROTECT_TMP_FILES[@]}" --links --filter \"- CVS/\" --filter \"- .svn/\" --filter \"- .git/\" --filter \"- .hg/\" \"${source}*\" \"${destination}\""
  rsync --delete -av "${RSYNC_PROTECT_TMP_FILES[@]}" --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "${source}"/* "${destination}"
}

SELECT_SLICE_RETVAL=""

select_slice() {
  local xcframework_name="$1"
  xcframework_name="${xcframework_name##*/}"
  local paths=("${@:2}")
  # Locate the correct slice of the .xcframework for the current architectures
  local target_path=""

  # Split archs on space so we can find a slice that has all the needed archs
  local target_archs=$(echo $ARCHS | tr " " "\n")

  local target_variant=""
  if [[ "$PLATFORM_NAME" == *"simulator" ]]; then
    target_variant="simulator"
  fi
  if [[ ! -z ${EFFECTIVE_PLATFORM_NAME+x} && "$EFFECTIVE_PLATFORM_NAME" == *"maccatalyst" ]]; then
    target_variant="maccatalyst"
  fi
  for i in ${!paths[@]}; do
    local matched_all_archs="1"
    local slice_archs="$(archs_for_slice "${xcframework_name}/${paths[$i]}")"
    local slice_variant="$(variant_for_slice "${xcframework_name}/${paths[$i]}")"
    for target_arch in $target_archs; do
      if ! [[ "${slice_variant}" == "$target_variant" ]]; then
        matched_all_archs="0"
        break
      fi

      if ! echo "${slice_archs}" | tr " " "\n" | grep -F -q -x "$target_arch"; then
        matched_all_archs="0"
        break
      fi
    done

    if [[ "$matched_all_archs" == "1" ]]; then
      # Found a matching slice
      echo "Selected xcframework slice ${paths[$i]}"
      SELECT_SLICE_RETVAL=${paths[$i]}
      break
    fi
  done
}

install_xcframework() {
  local basepath="$1"
  local name="$2"
  local package_type="$3"
  local paths=("${@:4}")

  # Locate the correct slice of the .xcframework for the current architectures
  select_slice "${basepath}" "${paths[@]}"
  local target_path="$SELECT_SLICE_RETVAL"
  if [[ -z "$target_path" ]]; then
    echo "warning: [CP] $(basename ${basepath}): Unable to find matching slice in '${paths[@]}' for the current build architectures ($ARCHS) and platform (${EFFECTIVE_PLATFORM_NAME-${PLATFORM_NAME}})."
    return
  fi
  local source="$basepath/$target_path"

  local destination="${PODS_XCFRAMEWORKS_BUILD_DIR}/${name}"

  if [ ! -d "$destination" ]; then
    mkdir -p "$destination"
  fi

  copy_dir "$source/" "$destination"
  echo "Copied $source to $destination"
}

install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiAssistant.xcframework" "AgentifaiAssistant" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreAnalytics.xcframework" "AgentifaiAssistant/AgentifaiCoreAnalytics" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreCommon.xcframework" "AgentifaiAssistant/AgentifaiCoreCommon" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreDomain.xcframework" "AgentifaiAssistant/AgentifaiCoreDomain" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreNetworking.xcframework" "AgentifaiAssistant/AgentifaiCoreNetworking" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreNotifications.xcframework" "AgentifaiAssistant/AgentifaiCoreNotifications" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreRealtime.xcframework" "AgentifaiAssistant/AgentifaiCoreRealtime" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreUI.xcframework" "AgentifaiAssistant/AgentifaiCoreUI" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiCoreUserAuth.xcframework" "AgentifaiAssistant/AgentifaiCoreUserAuth" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiFeatureFeedback.xcframework" "AgentifaiAssistant/AgentifaiFeatureFeedback" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiFeatureNotifications.xcframework" "AgentifaiAssistant/AgentifaiFeatureNotifications" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiFeatureSelector.xcframework" "AgentifaiAssistant/AgentifaiFeatureSelector" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiFeatureWebView.xcframework" "AgentifaiAssistant/AgentifaiFeatureWebView" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiRxSwiftCombine.xcframework" "AgentifaiAssistant/AgentifaiRxSwiftCombine" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"
install_xcframework "${PODS_ROOT}/AgentifaiAssistant/AgentifaiSharedResources.xcframework" "AgentifaiAssistant/AgentifaiSharedResources" "framework" "ios-arm64" "ios-arm64_x86_64-simulator"

