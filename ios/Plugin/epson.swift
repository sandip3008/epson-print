import Foundation

@objc public class epson: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
