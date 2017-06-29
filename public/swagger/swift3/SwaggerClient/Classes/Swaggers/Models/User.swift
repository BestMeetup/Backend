//
// User.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


open class User: JSONEncodable {
    public var id: Int32?
    public var email: String?
    public var password: String?
    public var passwordConfirmation: String?

    public init() {}

    // MARK: JSONEncodable
    open func encodeToJSON() -> Any {
        var nillableDictionary = [String:Any?]()
        nillableDictionary["id"] = self.id?.encodeToJSON()
        nillableDictionary["email"] = self.email
        nillableDictionary["password"] = self.password
        nillableDictionary["password_confirmation"] = self.passwordConfirmation
        let dictionary: [String:Any] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}