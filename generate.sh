#! /bin/bash

# .XXXXXXX makes it cross-compatible Mac/Linux
TMP_DIR=$(mktemp -d -t kiota.XXXXXXX)

PACKAGE_NAME="linux-x64"
if [[ $OSTYPE == 'darwin'* ]]; then
  PACKAGE_NAME="osx-x64"
fi
URL="https://github.com/microsoft/kiota/releases/download/v0.11.1/${PACKAGE_NAME}.zip"

curl -sL $URL > $TMP_DIR/kiota.zip
mkdir -p $TMP_DIR/kiota
unzip $TMP_DIR/kiota.zip -d $TMP_DIR/kiota

mkdir -p $TMP_DIR/bin
cp $TMP_DIR/kiota/$PACKAGE_NAME/kiota $TMP_DIR/bin/kiota
chmod a+x $TMP_DIR/bin/kiota

# and now the real generation
$TMP_DIR/bin/kiota generate -l typescript -d openapi/accounts_mgmt/v1/openapi.json -c AccountsMgmtApiClient -o ./accounts_mgmt
$TMP_DIR/bin/kiota generate -l typescript -d openapi/addons_mgmt/v1/openapi.json -c AddonsMgmtApiClient -o ./addons_mgmt
$TMP_DIR/bin/kiota generate -l typescript -d openapi/authorizations/v1/openapi.json -c AuthorizationsApiClient -o ./authorizations
$TMP_DIR/bin/kiota generate -l typescript -d openapi/clusters_mgmt/v1/openapi.json -c ClustersMgmtApiClient -o ./clusters_mgmt
# $TMP_DIR/bin/kiota generate -l typescript -d openapi/job_queue/v1/openapi.json -c JobQueueApiClient -o ./job_queue
# $TMP_DIR/bin/kiota generate -l typescript -d openapi/osd_fleet_mgmt/v1/openapi.json -c OsdFleetMgmtApiClient -o ./osd_fleet_mgmt
# $TMP_DIR/bin/kiota generate -l typescript -d openapi/service_logs/v1/openapi.json -c ServiceLogsApiClient -o ./service_logs
# $TMP_DIR/bin/kiota generate -l typescript -d openapi/service_mgmt/v1/openapi.json -c ServiceMgmtApiClient -o ./service_mgmt
# $TMP_DIR/bin/kiota generate -l typescript -d openapi/status_board/v1/openapi.json -c StatusBoardApiClient -o ./status_board
# $TMP_DIR/bin/kiota generate -l typescript -d openapi/web_rca/v1/openapi.json -c WebRcaApiClient -o ./web_rca

rm -rf $TMP_DIR
