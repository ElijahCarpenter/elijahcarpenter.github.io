// swift-tools-version:5.5

import PackageDescription

let package = Package(
    name: "ElijahcarpenterGithubIo",
    platforms: [.macOS(.v12)],
    products: [
        .executable(
            name: "ElijahcarpenterGithubIo",
            targets: ["ElijahcarpenterGithubIo"]
        )
    ],
    dependencies: [
        .package(name: "Publish", url: "https://github.com/johnsundell/publish.git", from: "0.8.0")
    ],
    targets: [
        .executableTarget(
            name: "ElijahcarpenterGithubIo",
            dependencies: ["Publish"]
        )
    ]
)
