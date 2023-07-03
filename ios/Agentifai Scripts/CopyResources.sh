#!/bin/sh
SRC_DIR="$SRCROOT/$PROJECT_NAME/Resources/Agentifai"
DST_DIR="$BUILT_PRODUCTS_DIR/$FULL_PRODUCT_NAME"

echo "Copying agentifai assistant resources"
if [[ -z "$BUILT_PRODUCTS_DIR" ]]; then
  echo "The script is meant to be run as an Xcode build step and relies on env variables set by Xcode."
  exit 1
fi

if [[ ! -e "$SRC_DIR" ]]; then
  echo "error: Path does not exist: $SRC_DIR"
  exit 2
fi

echo $SRC_DIR
echo $DST_DIR

# Copy all files from the source directory to the destination directory
find "$SRC_DIR" -type f -exec cp {} "$DST_DIR" \;
